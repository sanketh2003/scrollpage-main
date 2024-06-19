import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { RiArrowGoBackFill } from "react-icons/ri";
import Button from 'react-bootstrap/Button';

export default function Conf() {
  const { width, height } = useWindowSize();

  return (
    <div style={{ backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Confetti width={width} height={height} />
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Transparent black background */
        padding: '20px',
        border: '1px solid rgba(255, 255, 255, 0.2)', /* Slightly visible white border */
        borderRadius: '10px', /* Rounded corners */
        maxWidth: '80%' /* Adjust the width as needed */
      }}>
        <div className='heading' style={{ textAlign: 'center' }}>
          <pre style={{ fontSize: '5rem' }}>
            <strong>THANK YOU</strong>
            <p style={{ fontSize: '1.5rem' }}>Booked Successfully</p>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                GO BACK <RiArrowGoBackFill />
              </Button>
            </div>
          </pre>
        </div>
      </div>
    </div>
  );
}
