import React from 'react';
import img1 from '../asset/img1.png';
import img2 from '../asset/img2.png';
import img3 from '../asset/img3.png';
import img4 from '../asset/img4.jpg';
import img5 from '../asset/img5.jpg';
import img6 from '../asset/img6.webp';
import img7 from '../asset/img7.jpg';
import img8 from '../asset/img8.avif';
import img9 from '../asset/img9.jpg';
import img10 from '../asset/img10.jpg';
import './table.css';

const frontEnd = () => {
    return (
        <>

          <main>
          <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th>Task 1</th>
            <th>Task 2</th>
            <th>Task 3</th>
            <th>Task 4</th>
            <th>Task 5</th>
            <th>Attendance%</th>
          </tr>
          <tr>
            <td>Joshua</td>
            <td>Philips</td>
            <td><img src = {img1} alt='intern'/></td>
            <td>9</td>
            <td>10</td>
            <td>10</td>
            <td>9</td>
            <td>10</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Prince</td>
            <td>Nnamdi</td>
            <td><img src = {img2} alt='intern'/></td>
            <td>9</td>
            <td>8</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Joy</td>
            <td>James</td>
            <td><img src = {img3} alt='intern'/></td>
            <td>10</td>
            <td>6</td>
            <td>10</td>
            <td>9</td>
            <td>10</td>
            <td>95</td>
          </tr>
          <tr>
            <td>Grace</td>
            <td>Damian</td>
            <td><img src = {img4} alt='intern'/></td>
            <td>10</td>
            <td>5</td>
            <td>8</td>
            <td>8</td>
            <td>10</td>
            <td>95</td>
          </tr>
          <tr>
            <td>Victor</td>
            <td>Henry</td>
            <td><img src = {img5} alt='intern'/></td>
            <td>9</td>
            <td>10</td>
            <td>10</td>
            <td>2</td>
            <td>6</td>
            <td>90</td>
          </tr>
          <tr>
            <td>Jessica</td>
            <td>John</td>
            <td><img src = {img6} alt='intern'/></td>
            <td>10</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>9</td>
            <td>90</td>
          </tr>
          <tr>
            <td>Charles</td>
            <td>James</td>
            <td><img src = {img7} alt='intern'/></td>
            <td>9</td>
            <td>8</td>
            <td>6</td>
            <td>4</td>
            <td>4</td>
            <td>85</td>
          </tr>
          <tr>
            <td>Charity</td>
            <td>Philips</td>
            <td><img src = {img8} alt='intern'/></td>
            <td>10</td>
            <td>6</td>
            <td>4</td>
            <td>4</td>
            <td>2</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Precious</td>
            <td>Thompson</td>
            <td><img src = {img9} alt='intern'/></td>
            <td>6</td>
            <td>6</td>
            <td>5</td>
            <td>8</td>
            <td>4</td>
            <td>75</td>
          </tr>
          <tr>
            <td>Raphael</td>
            <td>Johnson</td>
            <td><img src = {img10} alt='intern'/></td>
            <td>6</td>
            <td>5</td>
            <td>7</td>
            <td>4</td>
            <td>4</td>
            <td>75</td>
          </tr>
        </table>
            </main>
        </>
    )
}

export default frontEnd