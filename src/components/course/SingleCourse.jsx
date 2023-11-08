import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { userLikes, userdislikes } from "../../services/firebase";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function SingleCourse({
  name,
  instructor,
  duration,
  id,
  thumbnail,
  enrollmentStatus,
  likes,
  dislikes,
  uniqueId,
}) {
  const user = useSelector((state) => state.user.user);
  const [like, setlike] = useState(false);
  const [disLike, setDisIslike] = useState(false);

  useEffect(() => {
    if (user) {
      setlike(likes.some((like) => like.email === user.email));
      setDisIslike(dislikes.some((like) => like.email === user.email));
    }
  }, [user, dislikes, likes]);

  const handlelikes = () => {
    if (!user) {
      console.log("click inn", user);

      toast.error("Please login before you like", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    userLikes(uniqueId, user, like);
  };

  const handledislikes = () => {
    if (!user) {
      toast.error("Please login before you dislike", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    userdislikes(uniqueId, user, disLike);
  };

  return (
    <div className="box-shadow flex sm:flex-row flex-col justify-between gap-4 p-6 rounded-xl group transition duration-300 ease-in-out w-full">
      <Link
        to={`/course-details/${id}`}
        className="flex xs:flex-row flex-col xs:gap-8 gap-4"
      >
        <img
          src={`/images/${thumbnail}.jpg`}
          alt="img"
          className="w-[220px] h-[120px] rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">{name}</p>
          <p className="text-sm text-gray-500">Instructor - {instructor}</p>
          <p className="text-sm font-semibold">Duration - {duration}</p>
          <div>
            <span
              className={`text-sm pt-1 pb-1.5 px-4 text-white rounded-lg ${
                enrollmentStatus === "Open"
                  ? "bg-green-500"
                  : enrollmentStatus === "Closed"
                  ? "bg-red-500"
                  : "bg-indigo-500"
              }`}
            >
              {enrollmentStatus}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex-col justify-between">
        <div className="flex gap-4 flex-row text-[10px] font-medium">
          <div className="flex flex-col gap-1 items-center">
            <ThumbUpIcon
              onClick={handlelikes}
              style={{
                fill: like ? "blue" : "",
                cursor: "pointer",
                fontSize: "20px",
              }}
            />
            {likes?.length} Likes
          </div>
          <div className="flex flex-col gap-1 items-center">
            <ThumbDownIcon
              onClick={handledislikes}
              style={{
                fill: disLike ? "blue" : "",
                cursor: "pointer",
                fontSize: "20px",
              }}
            />
            {dislikes?.length} Dislikes
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCourse;
