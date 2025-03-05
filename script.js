document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");
    console.log("Window coursesData:", window.coursesData);
    
    const coursesContainer = document.getElementById("courses-list");
    console.log("Courses container:", coursesContainer);

    // Create the courses list container if it doesn't exist
    if (!coursesContainer) {
        const educationDiv = document.getElementById("education");
        if (educationDiv) {
            const newCoursesContainer = document.createElement("div");
            newCoursesContainer.id = "courses-list";
            educationDiv.querySelector('.card-body').appendChild(newCoursesContainer);
            console.log("Created new courses-list container");
        }
    }

    // Directly reference coursesData from the global scope
    const courses = window.coursesData ? window.coursesData.courses : null;
    console.log("Courses:", courses);

    if (courses && courses.length > 0) {
        const coursesContainer = document.getElementById("courses-list");
        
        courses.forEach(course => {
            const courseItem = document.createElement("div");
            courseItem.classList.add("course-item");
            courseItem.innerHTML = `
                <p><strong>Code:</strong> ${course.code}</p>
                <p><strong>Description:</strong> ${course.description}</p>
                <p><strong>Credit:</strong> ${course.credit}</p>
                <p><strong>Year Level:</strong> ${course.year_level}</p>
                <p><strong>Semester:</strong> ${course.sem}</p>
                <hr>
            `;
            coursesContainer.appendChild(courseItem);
        });
    } else {
        const coursesContainer = document.getElementById("courses-list");
        if (coursesContainer) {
            coursesContainer.innerHTML = "<p>No courses available.</p>";
        } else {
            console.error("Could not find courses-list container");
        }
    }
});