Code for Progress program analysis and visualization tools
==========================================================

This node.js app makes use of the D3.js library to visualize quantative and qualitative data related to the metrics of success set for the 2014 Code for Progress fellowship program.

The stack uses node.js, Express, MongoDB, and Jade.



Why a node.js app for a program that teaches Python/Django?
-----------------------------------------------------------
Fellows train in Agile methodology to build rapid prototypes of apps, interfaces, and data tools that can help social justice-focused organizations achieve their missions around managing user info and interacting with members and clients. Given those needs, a program scope that required only an introductory focus on analytics and visualization specialists, and the Python community's traction in the national social justice movement's data field, Python and the Flask/Django frameworks were the appropriate choices for preparing our fellows.

Staff responsibilities are another matter. Analysis and visualization are rigorous components of a strong fellowship program - and in 2014, the D3.js library outstrips Python options.


Data sources: Quantitative
--------------------------
### I. Self-reported learning metrics
Course learning goals are assessed via exercises that score according to a three-color badge system. Badges exist for nine categories: BASH shell, Python 2.7, HTML 5.0, CSS 3.0, JavaScript, SQL, Flask/Django, human-centered design, and professional development

..*Blue badges mean "I need to schedule significant practice time to reach mastery of this skill"
..*Silver badges mean "I know how to demonstrate this skill given research and time, but will be scheduling time to practice for mastery."
..*Green badges mean "I'm not able to demonstrate this skill or find a path to do so without assistance from another coder."

For the visual directory of badges with explanations of their corresponding learning goals, visit http://community.codeforprogress.org/badges



### II. Instructor-reported learning metrics
After students self-report on outcomes and push code/email answers for exercises, the instructor performs an assessment to triangulate with students' self reported levels of proficiency.
Instructor-reported assessment follows the three-color scale detailed in I.


Visualization
-------------
### I. D3 visualization of raw number of self-reported badges, organized by topic.

### II. D3 visualization of raw number of instructor-reported badges, organized by topic.

