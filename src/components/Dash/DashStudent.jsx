import React, {useState} from "react";
import Layout from "../Layout/Layout";
import classes from "./styleSt.module.css";
import Assignment from "./assignment";
import StudentSecond from "./studentSecond"
let data = ["Home", "Assignments"];
let assignmenData = [
  {
    name: "Fractions - Pizza",
    description:
      "Make your own pizza! Determine the pieces needed to feed your family.",
    lessons: [
      {
        description:
                "Make your own pizza! Determine the pieces needed to feed your family.",
          state:'done'
        },
        {
            description:
                "Lesson description here",
            state:"active",
        },
        {
            description:
                "Lesson description here",
                state:"none",
        },
        {
            description:
                "Lesson description here",
                state:"none",
        },
        {
            description:
                "Pizza party!",
                state:"none",
          },
    ],
    },
    

    {
        name: "Fractions - Nachos",
        description:
          "Determine the fraction which makes the best possible nacho chip.",
        lessons: [
          {
            description:
              "Determine the fraction which makes the best possible nacho chip.",
            },
            {
                description:
                  "Lesson description here",
            },
            {
                description:
                  "Lesson description here",
              },
        ],
    },
    {
        name: "Operations - Seeds",
        description:
          "Plan out your own garden. Learn to group seeds together and plant them.",
        lessons: [
          {
            description:
              "Plan out your own garden. Learn to group seeds together and plant them.",
            },
            {
                description:
                  "Lesson description here",
            },
            {
                description:
                  "Lesson description here",
              },
        ],
      },
];
const StDash = () => {
    const [selected, setSelected] = useState(false)
  return (
      <Layout sidebar items={data} user="Oliver Sanchez" room="16" student>
       {   !selected &&
      <div className="container">
        <h1  className={classes.header}>Assignments </h1>

        <p className={classes.text}>Select an assignment below to begin work</p>
              <div className={classes.assignments}>
              {assignmenData.map((obj) => {
                  return <div onClick={(e) => {
                    setSelected(obj)
                }}> <Assignment key={obj.name}  name={obj.name} description={obj.description} /></div>
              })}
                  
                
      </div>
              </div>}
              {
                      selected && <StudentSecond object={selected}/>
                  }
    </Layout>
  );
};

export default StDash;
