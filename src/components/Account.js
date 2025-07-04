import React, { useState } from 'react';
import './Account.css';

const groomAccounts = [
  { name: '심진우', bank: '신한은행', number: '110-307-940143' },
  { name: '심재노', bank: '하나은행', number: '102-890042-44407' },
  { name: '정영란', bank: '하나은행', number: '317-910298-52507' },
]; 

const brideAccounts = [
  { name: '임혜진', bank: '우리은행', number: '1002-750-980259' },
  { name: '임재성', bank: '농협은행', number: '356-1592-7593-73' },
  { name: '박혜자', bank: '우리은행', number: '1002-741-531653' },
];

const copyToClipboard = (text) => {
  const onlyDigits = text.replace(/[^0-9]/g, '');
  navigator.clipboard.writeText(onlyDigits).then(() => {
    alert(`복사되었습니다: ${onlyDigits}`);
  });
};

const Account = () => {
  const [showGroom, setShowGroom] = useState(false);
  const [showBride, setShowBride] = useState(false);

  return (
    <div className="account-section">
      <h2 className="account-title">마음 전하실 곳</h2>
      <p className="account-message">멀리서도 축하의 마음을<br />전하고 싶으신 분들을 위해<br />계좌번호를 안내드립니다.</p>
      <p className="account-message">소중한 축하를 보내주셔서 감사드리며,<br />따뜻한 마음에 깊이 감사드립니다.</p><br /><br /><br />

      <div className="account-box" onClick={() => setShowGroom(!showGroom)}>
        <div className="account-label groom">신랑측 ▾</div>
        {showGroom && (
          <div className="account-details">
            {groomAccounts.map((acc, idx) => (
              <div key={idx} className="account-row">
                <span>{acc.name} ({acc.bank}) {acc.number}</span>
                <button onClick={(e) => { e.stopPropagation(); copyToClipboard(acc.number); }} className="copy-button">
                  복사
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="account-box" onClick={() => setShowBride(!showBride)}>
        <div className="account-label bride">신부측 ▾</div>
        {showBride && (
          <div className="account-details">
            {brideAccounts.map((acc, idx) => (
              <div key={idx} className="account-row">
                <span>{acc.name} ({acc.bank}) {acc.number}</span>
                <button onClick={(e) => { e.stopPropagation(); copyToClipboard(acc.number); }} className="copy-button">
                  복사
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
