import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FiEdit } from 'react-icons/fi';
import { FaMagnifyingGlass, FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['my-parcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;

        }
    })

    const handleParcelDel = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            // refresh the data in the ui
                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }

                    })


            }
        });
    }

    const handlePayment = async (parcel) => {
        const parcelInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName,
            trackingId: parcel.trackingId
        }
        const res = await axiosSecure.post('/create-checkout-session', parcelInfo);
        window.location.assign(res.data.url);
    }
    return (
        <div>
            <h2>You have {parcels.length} parcels.</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>NAME</th>
                                <th>COST</th>
                                <th>PAYMENT STATUS</th>
                                <th>TRACKING ID</th>
                                <th>DELIVERY STATUS</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                parcels.map((parcel, idx) => <tr key={parcel._id}>
                                    <th>{idx + 1}</th>
                                    <td>{parcel.parcelName}</td>
                                    <td>{parcel.cost}</td>
                                    <td>
                                        {
                                            parcel.paymentStatus === 'paid' ?
                                             <span className='text-green-800'>Paid</span>
                                            :
                                            <button onClick={() => handlePayment(parcel)} className="btn btn-1 text-black">Pay</button>
                                        }
                                    </td>
                                    <td>{parcel.trackingId}</td>
                                    <td>{parcel.deliveryStatus}</td>
                                    <td className="flex ">
                                        <button className="btn btn-2 btn-ghost ">
                                            <FiEdit size={18} />
                                        </button>
                                        <button className="btn btn-2 btn-ghost">
                                            <FaMagnifyingGlass size={16} />
                                        </button>
                                        <button 
                                            onClick={() => handleParcelDel(parcel._id)} 
                                            className="btn btn-2 btn-ghost"
                                        >
                                            <FaTrashCan size={16} />
                                        </button>
                                    </td>
                                </tr>)
                            }
                       
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyParcels;