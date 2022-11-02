import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [deviceInfo, setDeviceInfo] = useState<false | any>(false)

  const click = async() => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        optionalServices: ["battery_service", "device_information"],
        acceptAllDevices: true,
      })

      const deviceName = device.gatt.device.name
      const server = await device.gatt.connect()

      const batteryService = await server.getPrimaryService("battery_service")
      const infoService = await server.getPrimaryService("device_information")

      const batteryLevelCharacteristic = await batteryService.getCharacteristic(
        "battery_level"
      )

      const batteryLevel = await batteryLevelCharacteristic.readValue();
      const batteryPercent = await batteryLevel.getUint8(0);

      const infoCharacteristics = await infoService.getCharacteristics();

      console.log(infoCharacteristics);
      let infoValues = [];
      
      const promise = new Promise((resolve, reject) => {
          infoCharacteristics.forEach(async (characteristic, index, array) => {
            // Returns a buffer
            const value = await characteristic.readValue();
            console.log(new TextDecoder().decode(value));
            // Convert the buffer to string
            infoValues.push(new TextDecoder().decode(value));
            if (index === array.length - 1) resolve(console.log("ok"));
          });
        });

      promise.then(() => {
        setDeviceInfo({deviceName, batteryPercent})
      })

    } catch(err) {
      console.log(err)
      alert("error while fetching device details")
    }
  }

  return (
    <div>
      <h1>Hola</h1>
      <button onClick={click}>getDetails</button>
      {deviceInfo && 
        <>
          <h1>{deviceInfo.deviceName}</h1>
          <h1>{deviceInfo.batteryPercent}</h1>
        </>
      }
    </div>
  )
}
