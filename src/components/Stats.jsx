import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div>
          <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
            <h4 className="font-poppins font-semibold xs:text-[30px]
             text-[25px] xs:leadiing-[53px] leading-[43px] text-white ml-10">{stat.value}</h4>
            
            <p className="font-poppins font-normal xs:text-[20px]
             text-[15px] xs:leadiing-[26px] leading-[21px] text-gradient uppercase ml-2">{stat.title}</p>
          </div>
        </div>
      ))}
   </section>
  )
}

export default Stats