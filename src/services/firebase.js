// utils/fetchData.js
export async function fetchData() {
  try {
    const response = await fetch(
      "https://alemeno-1-default-rtdb.firebaseio.com/courseList.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data; // Modify the response data as needed
  } catch (error) {
    throw error;
  }
}

export const registerInCourse = async (course, studentDetails) => {
  const { uniqueId } = course;
  const enrollDetails = {
    ...studentDetails,
    ...course,
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
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export async function fetchCourseByStudent() {
  try {
    const response = await fetch(
      "https://alemeno-1-default-rtdb.firebaseio.com/enrollList.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data; // Modify the response data as needed
  } catch (error) {
    throw error;
  }
}
