import React from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';

const SendAParcel = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Centered Heading */}
            <h1 className='text-5xl font-bold text-center mb-8'>Send a Parcel</h1>
            
            <form className="flex flex-col gap-8">
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
                                className="input w-full" placeholder="Sender Name" />
                        </fieldset>
                        <fieldset>
                            <label className="label uppercase">Sender Email</label>
                            <input type="text" {...register('senderEmail')}
                                className="input w-full" placeholder="Sender Email" />
                        </fieldset>
                        <fieldset>
                            <label className="label uppercase">Sender Region</label>
                            <select {...register('senderRegion')} defaultValue="Pick a region" className="select w-full">
                                <option disabled={true}>Pick a region</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <label className="label uppercase">Sender District</label>
                            <select {...register('senderDistrict')} defaultValue="Pick a district" className="select w-full">
                                <option disabled={true}>Pick a district</option>
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
                            </select>
                        </fieldset>
                        <fieldset>
                            <label className="label uppercase">Receiver District</label>
                            <select {...register('receiverDistrict')} defaultValue="Pick a district" className="select w-full">
                                <option disabled={true}>Pick a district</option>
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
        </div>
    );
};

export default SendAParcel;