import React from 'react';

const CardMahasiswaComp = (props) => {
    return (
        <div>
            <p>Nama: {props.nama}</p>
            <p>NIM: {props.nim}</p>
            <p>Prodi: {props.prodi}</p>
        </div>
    )
}

CardMahasiswaComp.defaultProps = {
    nama: "No name",
    nim: "xx/xxxxxx/PA/xxxxx",
    prodi: "S1 Antah Barantah"
}

export default CardMahasiswaComp;