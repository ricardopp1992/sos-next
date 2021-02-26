import React from 'react';

import Layout from '../components/Layout/Layout';
import HeroPattern from '../components/HeroPattern';
import CoursesList from '../components/trainining-and-courses/CoursesList';
import CTACourses from '../components/trainining-and-courses/CTACourses';

const TrainingAndCourses = () => {
  return (
    <Layout title="Training And Courses">
      <HeroPattern title="Training And Courses" content={`
        Not only does the SOS team have the best experience and training,
        but we are willing to share. Learn from the best at our courses that
        will prepare and arm you the right way. `}
      />
      <CoursesList />
      <CTACourses />
      
    </Layout>
  );
}

export default TrainingAndCourses;