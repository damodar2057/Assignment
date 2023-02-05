import React from 'react'
import '../style.scss'
import { Link } from 'react-router-dom'
import Edit from '../images/edit.png'
import Delete from '../images/delete.png'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
      <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      <div className="user">
      <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
         <div className="info">
          <span>John</span>
          <p>Posted 2 days ago</p>
         </div>
         <div className="edit">
          <Link to={'/write?edit=2'}>
            <img src={Edit} alt='' />
          </Link>
          <img src={Delete} alt='' />
         </div>
      </div>
      <h1>lorem sjcjsnd sdcnsjdcn cnjsdcnsjd scnksjdsnn
      </h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur maxime eaque omnis perferendis placeat assumenda at! Ducimus nostrum porro eaque? Provident consectetur doloribus, debitis voluptates nihil sed nisi ea unde.
      Ipsum debitis repellendus in autem eos dolore provident aliquid doloremque hic soluta officia, ut suscipit illum nihil at, blanditiis non repellat, nulla accusantium a rerum sapiente! Assumenda nam voluptate porro!
      Temporibus veritatis ipsum vero cupiditate aliquid blanditiis velit odio ab repellendus architecto molestias atque eligendi nostrum mollitia cum repellat illo tenetur accusamus, dolorum eius? Exercitationem laboriosam error voluptas nostrum quidem.
      Nemo autem molestias quam iusto? Cupiditate, quisquam dolores? Accusamus accusantium repellendus ad aliquid ducimus, maxime, a sit assumenda cumque iure veniam optio adipisci. Sequi placeat eveniet corrupti corporis, totam assumenda.
      <br />
      <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti id vitae perspiciatis omnis necessitatibus tempore fugit consequatur eligendi nulla modi, ea pariatur voluptate enim doloribus, cupiditate dignissimos ducimus neque? Delectus?
      Nemo non vero quibusdam tenetur eos fugit ullam repellat iure rem. Voluptate consequuntur placeat est magnam, sapiente, alias recusandae sint, aut tenetur delectus molestias ex nobis! Et ea magnam veniam?</p>
      </div>
      <div className="menu"><Menu /></div>
     
      
    </div>
  )
}

export default Single
