import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const Confirmation = ({ 
    title = "Are you sure?", 
    text = "",
    icon = "warning",
    confirmButtonText = "Confirm", 
    denyButtonText = "Cancel",
    showCancelButton = false,
    confirmButtonColor = "#3085d6",
    cancelButtonColor = "#d33",
    onConfirm = () => {},
    onDeny = () => {},
    onCancel = () => {}
}) => {
    useEffect(() => {
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showDenyButton: true,
            showCancelButton: showCancelButton,
            confirmButtonText: confirmButtonText,
            denyButtonText: denyButtonText,
            confirmButtonColor: confirmButtonColor,
            cancelButtonColor: cancelButtonColor
        }).then((result) => {
            if (result.isConfirmed) {
                onConfirm();
            } else if (result.isDenied) {
                onDeny();
            } else if (result.isDismissed) {
                onCancel();
            }
        });
    }, [title, text, icon, confirmButtonText, denyButtonText, showCancelButton, confirmButtonColor, cancelButtonColor]);

    return null;
}

export default Confirmation;