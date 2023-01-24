import axios from 'axios'
import qs from 'qs';

//TO DO : MOVE ALL HARDCODED CREDENTIALS TO ENV FILE 


// Post to CopyCat ETR
export const postToETR = async (customerContent) => {

    const { attendant, statementID, address, shopName,discount, totalPrice, foodList, createdDate } = customerContent

  const {data} =   await axios.post(`http://192.168.8.105:5000/EsdApi/deononline/signinvoice`,

            {
                "deonItemDetails":  

                foodList.map((obj) => {
                    return {
                        "hsDesc":"",
                        //Name of Item
                        "namePLU":obj.name,
                        "taxRate": 16,
                        //Item Price
                        "unitPrice":parseFloat(obj.price),
                        //Item Discount
                        "discount":0,
                        "hsCode":"",
                        "quantity":parseFloat(obj.num),
                        "measureUnit":"",
                        "vatClass":"A"

                    }
                }),

                    "senderId":"a4031de9-d11f-4b52-8cca-e1c7422f3c37",
                    "invoiceCategory":"tax_invoice",
       
                    "traderSystemInvoiceNumber":statementID.slice(-4),
                    "relevantInvoiceNumber":"",
                    "pinOfBuyer":"",
                    "invoiceType":"Original",
                    "exemptionNumber":"",
                    "totalInvoiceAmount":parseFloat(totalPrice),
                    "systemUser":attendant
                
            }
   
    )

    console.log("DATA ==>", data)
    return data


}

