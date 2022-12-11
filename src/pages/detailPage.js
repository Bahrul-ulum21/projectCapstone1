import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import RukoDetail from '../componentsDetailRuko/RukoDetail';
import { getDataRuko } from '../utils/dataRuko';
 
function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={Number(id)} />;
}
 
class DetailPage extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      DataRukos: getDataRuko(props.id)
    };
  }
 
  render() {
    if (this.state.DataRukos === null) {
      return <p>DataRuko  is not found!</p>;
    }
 
    return (
        <>
        <section>
            <RukoDetail {...this.state.DataRukos} />
        </section>
        </>
       
    );
  }
}
 
export default DetailPageWrapper;