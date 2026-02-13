import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import '../App.css';
import { useLoaderData } from 'react-router';
import Confirmation from '../components/Confirmation';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';

const SendAParcel = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [formData, setFormData] = useState(null);
    const [calculatedCost, setCalculatedCost] = useState(0);
    const serviceCenters = useLoaderData();
    const regions = [...new Set(serviceCenters.map(d => d.region))];
    const districtsByRegion = (region) => {
        const regionDistricts = serviceCenters.filter(d => d.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }
    const senderRegion = useWatch({control, name:'senderRegion'});
    const receiverRegion = useWatch({control, name:'receiverRegion'});
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    
    const onSubmit = (data) => {
        console.log(data);

        const isDocument = data.parcelType === 'document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight);

        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        }
        else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;

                cost = minCharge + extraCharge;
            }
        }

        console.log('cost', cost);
        data.cost = cost;
        
        setFormData(data);
        setCalculatedCost(cost);
        setShowConfirmation(true);
    };

    const handleConfirm = () => {
        console.log('Form Data:', formData);
        console.log('Cost:', calculatedCost);
        
        axiosSecure.post('/parcels', formData)
        .then(res => {
            console.log(res.data);
            setShowConfirmation(false);
        })
        .catch(err => {
            console.error('Error:', err);
            setShowConfirmation(false);
        })
    };

    const handleDeny = () => {
        setShowConfirmation(false);
    };


    
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Centered Heading */}
            <h1 className='text-5xl font-bold text-center mb-8'>Send a Parcel</h1>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                {/* 3-Column Grid for Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    
                    {/* PARCEL DETAILS */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl font-semibold">Parcel Details</h4>
                        <div className="flex flex-col gap-2">
                            <label className='label'>
                                <input type="radio" {...register('parcelType')} value="document" className="radio" defaultChecked />
                                Document
                            </label>
                            <label className='label'>
                                <input type="radio" {...register('parcelType')} value="parcel" className="radio" />
                                Parcel
                            </label>
                        </div>
                        <div className="flex flex-col gap-4">
                            <fieldset>
                                <label className="label uppercase">Parcel Name</label>
                                <input type="text" {...register('parcelName')} className='input w-full' placeholder="Parcel Name" />
                            </fieldset>
                            <fieldset>
                                <label className="label uppercase">Parcel Weight (KG)</label>
                                <input type="text" {...register('parcelWeight')} className='input w-full' placeholder="Parcel Weight" />
                            </fieldset>
                        </div>
                    </div>

                    {/* SENDER DETAILS */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl font-semibold">Sender Details</h4>
                        <fieldset>
                            <label className="label uppercase">Sender Name</label>
                            <input type="text" {...register('senderName')}
                            defaultValue={user?.displayName}
                                className="input w-full" placeholder="Sender Name" />
                        </fieldset>
                        <fieldset>
                            <label className="label uppercase">Sender Email</label>
                            <input type="text" {...register('senderEmail')}
                            defaultValue={user?.email}
                                className="input w-full" placeholder="Sender Email" />
                        </fieldset>
                        <fieldset>
                            <label className="label uppercase">Sender Region</label>
                            <select {...register('senderRegion')} defaultValue="Pick a region" className="select w-full">
                                <option disabled={true}>Pick a region</option>
                                {
                                    regions.map((r,i)=> 
                                    <option key={i} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>
                        <fieldset>
                            <label className="label uppercase">Sender District</label>
                            <select {...register('senderDistrict')} defaultValue="Pick a district" className="select w-full">
                                <option disabled={true}>Pick a district</option>
                                {
                                    districtsByRegion(senderRegion).map((dis, idx) => 
                                    <option key={idx} value={dis}>{dis}</option>)
                                }
                                
                            </select>
                        </fieldset>
                        <fieldset>
                            <label className="label uppercase">Sender Address</label>
                            <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />
                        </fieldset>
                    </div>

                    {/* RECEIVER DETAILS */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-2xl font-semibold">Receiver Details</h4>
                        <fieldset>
                            <label className="label uppercase">Receiver Name</label>
                            <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />
                        </fieldset>
                        <fieldset>
                            <label className="label uppercase">Receiver Email</label>
                            <input type="text" {...register('receiverEmail')} className="input w-full" placeholder="Receiver Email" />
                        </fieldset>
                        <fieldset>
                            <label className="label uppercase">Receiver Region</label>
                            <select {...register('receiverRegion')} defaultValue="Pick a region" className="select w-full">
                                <option disabled={true}>Pick a region</option>
                                {
                                    regions.map((reg,idx)=> 
                                    <option key={idx} value={reg}>{reg}</option>)
                                }
                            </select>
                        </fieldset>
                        <fieldset>
                            <label className="label uppercase">Receiver District</label>
                            <select {...register('receiverDistrict')} defaultValue="Pick a district" className="select w-full">
                                <option disabled={true}>Pick a district</option>
                                {
                                    districtsByRegion(receiverRegion).map((dis, idx) => 
                                    <option key={idx} value={dis}>{dis}</option>)
                                }
                            </select>
                        </fieldset>
                        <fieldset>
                            <label className="label uppercase">Receiver Address</label>
                            <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Receiver Address" />
                        </fieldset>
                    </div>
                </div>

                {/* Centered Submit Button */}
                <div className=" block mx-auto">
                    <button className='btn btn-1'>Send Parcel</button> 
                </div>
            </form>

            {/* Confirmation Dialog */}
            {showConfirmation && (
                <Confirmation
                    title="Do You Want to Continue?"
                    text={`Total Cost: ${calculatedCost} taka`}
                    icon="warning"
                    confirmButtonText="Confirm and Proceed to Payment!"
                    denyButtonText="Cancel"
                    onConfirm={handleConfirm}
                    onDeny={handleDeny}
                />
            )}
        </div>
    );
};

export default SendAParcel;