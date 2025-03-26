document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");
    console.log("Window coursesData:", window.coursesData);
    
    const coursesContainer = document.getElementById("courses-list");
    console.log("Courses container:", coursesContainer);

    if (!coursesContainer) {
        const educationDiv = document.getElementById("education");
        if (educationDiv) {
            const newCoursesContainer = document.createElement("div");
            newCoursesContainer.id = "courses-list";
            educationDiv.querySelector('.card-body').appendChild(newCoursesContainer);
            console.log("Created new courses-list container");
        }
    }

    const courses = window.coursesData ? window.coursesData.courses : null;
    console.log("Courses:", courses);

    if (courses && courses.length > 0) {
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
        if (coursesContainer) {
            coursesContainer.innerHTML = "<p>No courses available.</p>";
        } else {
            console.error("Could not find courses-list container");
        }
    }

    // Add search bar to the navigation
    const nav = document.querySelector('.nav');
    const searchContainer = document.createElement('div');
    searchContainer.innerHTML = `
        <input type="text" id="search-input" placeholder="Search..."/>
        <button id="search-btn">🔍</button>
    `;
    searchContainer.classList.add('search-container');
    nav.appendChild(searchContainer);

    // Search function
    document.getElementById('search-btn').addEventListener('click', function() {
        const query = document.getElementById('search-input').value.toLowerCase();
        const sections = document.querySelectorAll('.card');

        sections.forEach(section => {
            const text = section.innerText.toLowerCase();
            section.style.display = text.includes(query) ? 'block' : 'none';
        });
    });

    // Real-time search
    document.getElementById('search-input').addEventListener('input', function() {
        document.getElementById('search-btn').click();
    });
});
