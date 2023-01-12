import React from 'react';
import Hero from "./Hero_School/Hero";
import Course_school from "./Course_school/Course_school";
import Master_school from "./Master_school/Master_school";
import Level_paket from "./level_paket/Level_paket";
import Comment_school from "./comment_school/Comment_school";

import Form_school from "./form_school/Form_school";
const School = () => {
    return (
        <div>
            <Hero/>
            <Course_school/>
            <Master_school/>
            <Level_paket/>
            <Comment_school/>
            <Form_school/>
        </div>
    );
};

export default School;