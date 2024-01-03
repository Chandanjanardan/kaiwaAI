import React from 'react'
import Data from "./Data"

function Dashboard() {
    console.log(Data)
  return (
    <div className='main-dashboard'>
        <div className="finetune">
           <h2 style={{marginLeft:"20px"}}>Fine Tune</h2> 
           <div className="firstrow">
                <input placeholder='Chatbotname'/>
                <input placeholder='Knowledge Base URL...'/>
                <input placeholder='Domain'/>

           </div>
           <div className="secondrow">
            <select>
                <option value="5 days">5 Days</option>
                <option value="10 days">10 Days</option>
                <option value="15 days">15 Days</option>
            </select>
                {/* <input placeholder='Days Count'/> */}
                <input placeholder='Placeholder...'/>
                <button>Build Chatbot</button>

           </div>
        </div>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th><p>Chatbot ID</p></th>
                        <th><p>Chatbot Name</p></th>
                        <th><p>Dataset Name</p></th>
                        <th><p>Model Name</p></th>
                        <th><p>Status</p></th>
                        <th><p>Deploy</p></th>
                        <th><p>RAG</p></th>

                    </tr>
                </thead>
                <tbody>
          {Data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.chatbotName}</td>
              <td>{item.datasetName}</td>
              <td>{item.modelName}</td>
              <td>{item.status}</td>
              <td>{item.deploy}</td>
              <td>{item.rag}</td>
            </tr>
          ))}
        </tbody>
              
            </table>
        </div>
    </div>
  )
}

export default Dashboard