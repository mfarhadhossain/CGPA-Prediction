import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img from '../../assets/images/bg2.jpg';
import Illustration from '../Illustration';
import '../../styles/home.module.css';
export default function Home() {
  return (
      <>
          <div className="container">
              <Illustration image={img} />
              <div className="home-content">
                  <h1 className="home-title">Welcome to the Student Performance Monitoring System</h1>
                  <p className="home-description">Our system is designed to help students, teachers, and parents monitor academic performance and progress over time. With a user-friendly interface, you can easily track grades, attendance, and other important data.</p>
                  <p className="home-description">We believe that by providing transparent and timely information, we can empower students to take control of their learning and achieve their full potential.</p>
                  <h2 className="home-subtitle">Features</h2>
                  <ul className="home-list">
                      <li>Real-time updates on grades and attendance</li>
                      <li>Individualized dashboards for students and teachers</li>
                      <li>Customizable alerts for missing assignments or poor performance</li>
                      <li>Automated report card generation</li>
                      <li>Integrated messaging system for communication between students, teachers, and parents</li>
                  </ul>
                  <h2 className="home-subtitle">Getting Started</h2>
                  <p className="home-description">To start using the Student Performance Monitoring System, simply sign up for an account and create a profile. Once you're logged in, you'll be able to access your personal dashboard and view your performance data.</p>
                  <p className="home-description">For teachers, you'll be able to create classes, input student data, and monitor progress. Parents will also have access to their child's dashboard and receive regular updates on their performance.</p>
                  <p className="home-description">We're excited to help you on your academic journey and look forward to seeing your progress!</p>
                  <a href="/signup" className="home-button">Sign Up</a>
              </div>
          </div>
      </>
  );
}
