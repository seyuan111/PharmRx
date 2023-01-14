import React from 'react'
import {CiDeliveryTruck} from 'react-icons/ci'
import {BiTransfer} from 'react-icons/bi'
import {FcPhoneAndroid} from 'react-icons/fc'

const Prescriptions = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 text-rose-800 text-center">
        <h1 className="py-4">Prescriptions provided how and when you need them</h1>
        <p className="py-4">Choose an option</p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            
            <div className="flex flex-col border-[5px] rounded-lg py-12 px-8">
                <div>
                <div className="inline-flex text-[40px]"><CiDeliveryTruck /></div>
                <h2 className="text-[25px] py-4">Have your medications delivered</h2>
                <p className="mb-10">click here and follow the steps to have your medications delivered to your home.</p>
                <button className="text-white">Click here</button>
                </div>
            </div>

            <div className="flex flex-col border-[5px] rounded-lg py-12 px-8">
                <div>
                <div className="inline-flex text-[40px]"><FcPhoneAndroid /></div>
                    <h2 className="text-[25px] py-4">Order over the counter medications</h2>
                    <p className="mb-10">Click here to order your over the counter medications.</p>
                    <button className="text-white">Click here</button>
                </div>
            </div>

            <div className="flex flex-col border-[5px] rounded-lg py-12 px-8">
                <div>
                <div className="inline-flex text-[40px]"><BiTransfer /></div>
                    <h2 className="text-[25px] py-4">Have your Prescriptions Transferred</h2>
                    <p className="mb-10">click here and follow the steps to have your Rx transferred.</p>
                    <button className="text-white">Click here</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Prescriptions