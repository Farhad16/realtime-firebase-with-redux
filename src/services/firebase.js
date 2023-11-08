import { toast } from "react-toastify";

import { ref, onValue } from "firebase/database";
import { firebaseApp } from "../config/firebase";

const database = firebaseApp.database();

export function subscribeToCourseList(callback) {
  const courseListRef = ref(database, "courseList");
  onValue(courseListRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
}

export const enrollCourse = async (course, studentDetails) => {
  const { uniqueId } = course;
  const enrollDetails = {
    ...studentDetails,
    ...course,
    progress: Math.round(Math.random() * 90),
    isCompleted: false,
  };

  const firebaseUrl =
    "https://alemeno-1-default-rtdb.firebaseio.com/courseList/";

  // Fetch the current course data
  fetch(`${firebaseUrl}${uniqueId}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((courseData) => {
      // Check if the course data has a 'students' array
      if (!courseData.students) {
        courseData.students = [];
      }

      // Add the new student to the 'students' array
      courseData.students.push(studentDetails);

      // Send a PUT request to update the course with the new 'students' array
      return fetch(`${firebaseUrl}${uniqueId}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      });
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      fetch("https://alemeno-1-default-rtdb.firebaseio.com/enrollList.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enrollDetails),
      });
      toast.success("Course enrollment success", {
        position: "top-right",
        autoClose: 3000, // Auto-close in 3 seconds
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export async function subscribeToCourseListByStudent(callback) {
  const courseListRef = ref(database, "enrollList");
  onValue(courseListRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
}

export async function updateCourseStatus(uniqueId) {
  try {
    const updateUrl = `https://alemeno-1-default-rtdb.firebaseio.com/enrollList/${uniqueId}.json`;

    const data = {
      isCompleted: true,
      progress: 100,
    };

    const response = await fetch(updateUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    toast.success("Mark as completed successfully", {
      position: "top-right",
      autoClose: 3000,
    });
  } catch (error) {
    throw error;
  }
}

export const userLikes = async (uniqueId, likerDetails, isLikes) => {
  try {
    const details = { ...likerDetails };
    const firebaseUrl = `https://alemeno-1-default-rtdb.firebaseio.com/courseList/${uniqueId}.json`;

    const response = await fetch(firebaseUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const courseData = await response.json();

    if (!courseData.likes) {
      courseData.likes = [];
    }

    if (isLikes) {
      courseData.likes = courseData.likes.filter(
        (like) => like.email !== details.email
      );
    } else {
      courseData.likes.push(details);
    }

    const putResponse = await fetch(firebaseUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });

    if (!putResponse.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const userdislikes = async (uniqueId, dislikerDetails, isdislike) => {
  try {
    const details = { ...dislikerDetails };
    const firebaseUrl = `https://alemeno-1-default-rtdb.firebaseio.com/courseList/${uniqueId}.json`;

    const response = await fetch(firebaseUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const courseData = await response.json();

    if (!courseData.dislikes) {
      courseData.dislikes = [];
    }

    if (isdislike) {
      courseData.dislikes = courseData.dislikes.filter(
        (dislike) => dislike.email !== details.email
      );
    } else {
      courseData.dislikes.push(details);
    }

    const putResponse = await fetch(firebaseUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });

    if (!putResponse.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
