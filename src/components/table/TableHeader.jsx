import React from 'react';
import configFile from "../../config/config.json"

const TableHeader = () => {
    return (
        <thead className="border-bottom-0 border-2">
        <tr>
        {Object.keys(configFile.colums).map((colum) => (
                    <th key={colum}                    
                    >
                        {configFile.colums[colum]}
                        
                    </th>
                ))}
        </tr>
        </thead>
   );
}
 
export default TableHeader;