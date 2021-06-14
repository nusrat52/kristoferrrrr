import React from "react";
import classes from "./styleSt.module.css";
import Assignment from "./assignment";

const StudentSecond = ({ object }) => {
  return (
    <div className="container">
      <h1 className={classes.header}>Assignments </h1>

      <div className={classes.studentSecond}>
        <Assignment name={object.name} description={object.description} />
        <div className={classes.lessons}>
          <h1 className={classes.assignment__basliq}>Lessons</h1>

          <p className={classes.assignment__text}>
                     {object.description}
                    
          </p>

          {object.lessons?.map((lesson) => {
            return (
              <div className={classes.lesson}>
                <div
                        className={
                            lesson.state=='done' ?
                    classes.lesson__iconWrapper +
                    " " +
                                classes.lesson__iconWrapper_active :
                                lesson.state == 'active' ?
                                    classes.lesson__iconWrapper :
                                    classes.lesson__iconWrapper__none
                  }
                >
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.1136 13.1592L0.263593 7.30919C-0.0878643 6.95774 -0.0878643 6.38789 0.263593 6.03639L1.53636 4.7636C1.88781 4.4121 2.4577 4.4121 2.80915 4.7636L6.75 8.7044L15.1908 0.263593C15.5423 -0.0878643 16.1122 -0.0878643 16.4636 0.263593L17.7364 1.53639C18.0879 1.88785 18.0879 2.4577 17.7364 2.80919L7.3864 13.1592C7.0349 13.5107 6.46506 13.5107 6.1136 13.1592Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h1 className={  (lesson.state=='done'|| lesson.state=='active')? classes.lesson__header:classes.lesson__header+" "+classes.lesson__text_disabled}>Lesson 1</h1>
                <p className={  (lesson.state=='done'|| lesson.state=='active')? classes.lesson__text:classes.lesson__text+" "+classes.lesson__text_disabled}>
                 {lesson.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentSecond;
