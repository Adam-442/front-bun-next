'use client';
import csv2json from 'csvjson-csv2json';
import { FormEvent, useEffect, useState } from "react";

function MyLI(props: {content: string}) {
  return <li className="outline-1 outline-slate-600 outline-dashed">{props.content}</li>
}

const parameters = {
  "/uploadData": "",
  "/getAllRequests": "",
  "/getRequest/": "RequestID",
  "/getAllAccounts": "",
  "/getAccount/": "RequestID",
  "/getAllActivityRequests": "",
  "/getActivityRequest/": "RequestID",
  "/getAccountPermissions/": "AccountID",
  "/addPermission/": "Permission Name",
  "/getAllPermissions": "",
  "/getCompanyActivities/": "ActivityRequestID",
  "/addActivity/": "Activity Name",
  "/getAllActivities": "",
}

export default function Home() {
  const [file, setFile] = useState<File>();
  const [value, setValue] = useState('/getAllRequests');
  const parameter = parameters[value as keyof typeof parameters];
  const [status, setStatus] = useState('');
  const [json, setJson] = useState<string | undefined>(undefined);
  const [results, setResults] = useState<JSON[]>([]);

  useEffect(() => {
    if (value === '/uploadData' && file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = async (event) => {
        const csvText = event.target?.result as string;
        if (!csvText) {
          setStatus('Error: CSV not valid');
          return
        };
        const jsonData = csv2json(csvText, {parseNumbers: true, parseJSON: true});
        setJson(JSON.stringify(jsonData));
      };
    }    
  }, [file]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('Wait..')
 
    // get data from FORM
    const formData = new FormData(event.currentTarget)    
    let link = `${formData.get('select')}`;
    let method = 'POST';

    // If link has parameter, add it
    if (link[link.length-1]==='/') {
      link = link.concat(`${formData.get('parameter')}`)
    }

    // change method depending on the option selected
    if (link.includes('/get')) {
      method = 'GET';
    }

    // Send request
    const response = await fetch(`http://localhost:5500${link}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: value === '/uploadData'? json: undefined,
    })
    .then(res => res.text())
    .then(text => {
      try {
        const data = JSON.parse(text);
        if (data.length === 0) setStatus('No Results');
        else setStatus('Success');
        setResults(data);
      } catch (e) {
        setStatus(text);
      }
    });
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center p-14">
      <p className="text-xs">Made By <i className="hover:text-purple-500 transition-colors"><a href="https://github.com/Adam-442/" target="_blank">Adam Abu Saab</a></i></p>
      <h1 className="font-bold mb-8 text-5xl">Welcome!</h1>
      <div className="">
        <form onSubmit={onSubmit} className="flex gap-2">
          <label className="font-bold text-center py-3">Choose an option:</label>
          <select name="select" id="form_selector" className="text-gray-700 font-bold cursor-pointer rounded px-1" value={value} onChange={(e) => {setValue(e.target.value)}}>
            <optgroup label="Requests-Related">
              <option value="/uploadData">Upload CSV</option>
              <option value="/getAllRequests">Get All Requests</option>
              <option value="/getRequest/">Get a Request</option>
              <option value="/getAllAccounts">Get All Accounts</option>
              <option value="/getAccount/">Get an Account</option>
              <option value="/getAllActivityRequests">Get All Activity Requests</option>
              <option value="/getActivityRequest/">Get an Activity Request</option>
            </optgroup>
            <optgroup label="Permissions-Related">
              <option value="/getAccountPermissions/">Get an Account Permissions</option>
              <option value="/addPermission/">Add Permission</option>
              <option value="/getAllPermissions">Get All Permissions</option>
            </optgroup>
            <optgroup label="Activities-Related">
              <option value="/getCompanyActivities/">Get a Company Activities</option>
              <option value="/addActivity/">Add an Activity</option>
              <option value="/getAllActivities">Get All Activities</option>
            </optgroup>
          </select>
          <input type="text" name="parameter" placeholder={parameter} className="text-gray-700 font-bold rounded px-3" hidden={parameter === ''}/>
          <input type="file" id="uploadfile" name="uploadfile" className="py-2" accept="excel/*,.csv" onChange={(e)=> e.target.files?.length? setFile(e.target.files[0]): null} hidden={value != '/uploadData'}/>
          <button type="submit" className="bg-purple-700 hover:bg-purple-500 transition-colors font-bold py-1 px-4 rounded">Submit</button>
        </form>
      </div>

      <p className="font-bold text-slate-300 mt-3">{status}</p>

      <div className="m-4 overflow-scroll flex-grow outline-1 outline-purple-600 outline-dashed w-full">
        <ul id="jsonList" className="flex flex-col gap-2 px-3 py-1">
          {results.map(result => JSON.stringify(result) ).map((Fresult) => <MyLI key={Fresult} content={Fresult}/>)}
        </ul>
      </div>
    </main>
  );
}