const baseURI ='http://localhost:9000';
export const searchShipments =async <T>(uri: string,query: any={}): Promise<T[]>=>{
    const params : URLSearchParams= new URLSearchParams(query);
    const response =await fetch(baseURI + uri + params,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        }

    });
    const data: T[] = ((await response.json())as any) as T[];
    return data;
}
export const getUser =async <T>(uri: string,user: T): Promise<T>=>{
    const response = await fetch(baseURI + uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
    
      if (!response.ok) {
        throw new Error('Failed to get User');
      }
    
      const data: T = await response.json();
      return data;
}
export const searchPackages =async <T>(uri: string,query: any={}): Promise<T[]>=>{
    const params : URLSearchParams= new URLSearchParams(query);
    const response =await fetch(baseURI + uri + params,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        }

    });
    const data: T[] = ((await response.json())as any) as T[];
    return data;
}
export const updateShipment = async <T>(uri: string, query: any={}): Promise<T> => {
    console.log(query+'hereeeee');
    const response = await fetch(baseURI + uri, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    });
  
    if (!response.ok) {
      throw new Error('Failed to update Shipment');
    }
  
    const data: T = await response.json();
    return data;
};


export const saveShipment = async <T>(uri: string, query: any={}): Promise<T> => {
    console.log(query);
    //const jsonObject = JSON.parse(query);
    const response = await fetch(baseURI + uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    });
  
    if (!response.ok) {
      throw new Error('Failed to ADD Shipment');
    }
  
    const data: T = await response.json();
    console.log(data);
    return data;
  };
  export const deleteShipment = async <T>(uri: string, query: any={}): Promise<T> => {
    //console.log(shipment);
    const response = await fetch(baseURI + uri, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      ///body: JSON.stringify(shipment)
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete Shipment');
    }
  
    const data: T = await response.json();
    return data;
};