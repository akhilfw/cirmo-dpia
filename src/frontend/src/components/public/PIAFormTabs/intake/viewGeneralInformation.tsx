import ViewComments from '../../../common/ViewComment';
import { CommentCount } from '../../../common/ViewComment/interfaces';
import { useState } from 'react';
import { MinistryList } from '../../../../constant/constant';
import { IPiaForm } from '../../../../types/interfaces/pia-form.interface';
import { dateToString } from '../../../../utils/date';
import { PiaSections } from '../../../../types/enums/pia-sections.enum';

interface IGeneralInformationProps {
  pia: IPiaForm;
  commentCount?: CommentCount;
  path: PiaSections | undefined;
}

const PIAIntakeGeneralInformation = ({
  pia,
  commentCount,
  path,
}: IGeneralInformationProps) => {
  const [piaMinistryFullName, setPiaMinistryFullName] = useState(
    MinistryList.find((item) => item.value === pia.ministry)?.label || '',
  );

  return (
    <>
      <div
        className={`card p-4 p-md-5 ${
          path && path === PiaSections.INTAKE_GENERAL_INFORMATION
            ? 'section-focus'
            : ''
        }`}
      >
        <div className="d-grid gap-3">
          <div className="row">
            <div className="col col-md-3">
              <b>Drafter</b>
              <div>{pia.drafterName}</div>
              <div>{pia.drafterEmail}</div>
            </div>
            <div className="col col-md-3">
              <b>Ministry</b>
              <div>{piaMinistryFullName}</div>
            </div>
            <div className="col col-md-3">
              <b>Branch</b>
              <div>{pia.branch}</div>
            </div>
            <div className="col col-md-3">
              <b>Initiative Lead</b>
              <div>{pia.leadName}</div>
              <div>{pia.leadTitle}</div>
              <div>{pia.leadEmail}</div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col col-md-3">
              <strong>Submitted on</strong>
              <div>{pia.submittedAt ? dateToString(pia.submittedAt) : ''}</div>
            </div>
            <div className="col col-md-3">
              <strong>Last modified</strong>
              <div>{dateToString(pia.updatedAt)}</div>
            </div>
          </div>
        </div>

        <ViewComments
          count={commentCount?.[PiaSections.INTAKE_GENERAL_INFORMATION]}
          path={PiaSections.INTAKE_GENERAL_INFORMATION}
        />
      </div>
    </>
  );
};

export default PIAIntakeGeneralInformation;
