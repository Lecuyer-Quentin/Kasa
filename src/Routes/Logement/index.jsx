import React from 'react';
import Carrousel from '../../components/carrousel';
import Info from '../../components/info';
import Host from '../../components/host';
import DropDown from '../../components/dropDown';

export default function Logement({data}) {
    const { pictures, title, location, tags, host, rating, equipments, description } = data;

    return (
        <>
            <Carrousel slides={pictures} />
            <div className='content'>
                <Info title={title} location={location} tags={tags} />
                <Host host={host} rating={rating} />
                <div className='content__dropDowns' >
                    <DropDown name="Équipements" dropDownData={equipments} />
                    <DropDown name="Description" dropDownData={description} />
                </div>
            </div>
        </>
      
    )
}