import React from 'react'
import Link from 'next/link';
import { Button } from '@mui/material';

const Index = ({id}:{id:number}) => {
  return (
    <div>
      <p>Successfully listed NFT {id}</p>
      <Button>
        {" "}
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}

export default Index