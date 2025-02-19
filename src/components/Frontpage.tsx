import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/styles.css';
import Heading from './Heading';
import { LABELS } from '../variables/variables';

const Frontpage = () => {
  return (
    <>
    <Heading className='heading frontpage-heading' title={LABELS.FRONT_PAGE}></Heading>
    <div> tämä on etusivu</div>
    <>tällä sivustolla on käytössä eu:n komission saavutettavuus direktiivi</>
    </>
  );
}

export default Frontpage;