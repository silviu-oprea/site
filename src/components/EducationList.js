import React, { useEffect, useState } from "react";

export const educationList = [
    {
        dates: "2018 - 2023",
        degree: "PhD in Data Science",
        institution: "the University of Edinburgh",
        description: <React.Fragment>
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </React.Fragment>
    },
    {
        dates: "2017 - 2018",
        degree: "MRes in Data Science",
        institution: "the University of Edinburgh",
        description: <React.Fragment>
Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </React.Fragment>
    },
    {
        dates: "2012 - 2013",
        degree: "MSc in Computer Science",
        institution: "the University of Oxford",
        description: <React.Fragment>
Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </React.Fragment>
    },
    {
        dates: "2009 - 2012",
        degree: "BSc in Computer Science",
        institution: "Jacobs University Bremen",
        description: <React.Fragment>
Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </React.Fragment>
    }
]