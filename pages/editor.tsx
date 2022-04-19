import { FlexHC } from '../styles/styles';
import Head from 'next/head';
import LeftNav from '../components/core/leftNav'
const Editor  = () => (
   <FlexHC>
        <Head>
        <title>Resume Builder</title>
        <link rel="icon" href="/favicon.ico" />
       </Head>
       <LeftNav/>
   </FlexHC>
)

export default Editor