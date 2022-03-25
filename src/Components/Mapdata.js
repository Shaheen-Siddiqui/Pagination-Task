import React,{useState} from 'react';

const Mapdata = ({Item,loding}) => {

  if(loding){
    return <h2>datas are Loding..... </h2>
  }
  return (
    
    <div>
       <table className="tableMidle">
      {
        Item.map((value)=>{ 
          return(<>
          <tr className="dis_flex">
          <td className="table-map">{value.brand_selling_score}  </td>
          <td className="table-map">{value.product_name} </td>
          <td className="table-map">{value.minor_category_selling_score} </td>
          <td className="table-map">{value.product_sub_category} </td>
          <td className="table-map">{value.product_brand_name} </td>
          <td className="table-map">{value.product_base_quantity} </td>
          <td className="table-map">{value.product_minor_category} </td>
          <td className="table-map">{value.is_active} </td>
          </tr>
          </>)
        })
    }
    </table>


    </div>
  )
}

export default Mapdata;
