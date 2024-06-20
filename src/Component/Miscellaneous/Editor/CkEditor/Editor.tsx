import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { CKEditorExample, EditorsText } from '../../../../utils/Constant';
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Btn, H1, P } from '../../../../AbstractElements';

const Editor = () => {
  const loremText: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet, faucibus ante a, interdum enim. Sed in mauris a lectus lobortis condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit amet elit vitae, elementum gravida eros. In ornare tempus nibh ut lobortis. Nam venenatis justo ex, vitae vulputate neque laoreet a.`;

  const [editing, setEditing] = useState(false);
  const showEditor = () => setEditing(!editing);
    return (
      <Col sm="12">
        <Card>
          <CardHeaderCommon title={CKEditorExample} />
          <CardBody>
            {editing ? (
              <>
                <CKEditor editor={ClassicEditor} data={loremText} />
                <Btn color="light" className="mt-2" onClick={() => setEditing(false)}>{`Hide`}</Btn>
              </>
            ) : (
              <div onClick={showEditor}>
                <H1>{EditorsText}</H1>
                <P>{loremText}</P>
              </div>
            )}
          </CardBody>
        </Card>
      </Col>
    );
}

export default Editor