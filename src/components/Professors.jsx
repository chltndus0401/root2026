import React, { useState } from 'react';
import { PROFESSORS } from '../data/people';

export default function Professors() {
  const [selectedProf, setSelectedProf] = useState(null);

  const handleProfClick = (prof) => {
    if (selectedProf?.name === prof.name) {
      setSelectedProf(null);
    } else {
      setSelectedProf(prof);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      {/* 헤더 부분 */}
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px', color: '#1B3B2B' }}>
        PROFESSORS
      </h2>
      <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>지도교수</p>

      {/* 안내 서브타이틀 */}
      <p style={{ fontSize: '14px', fontWeight: '500', marginBottom: '20px', color: '#333' }}>
        ✦ Click to check out Messages!
      </p>

      {/* 교수님 이름 목록 버튼 Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '30px',
        }}
      >
        {PROFESSORS.map((prof) => {
          const isSelected = selectedProf?.name === prof.name;
          return (
            <button
              key={prof.name}
              onClick={() => handleProfClick(prof)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: isSelected ? 'bold' : 'normal',
                color: isSelected ? '#1B3B2B' : '#444',
                textDecoration: isSelected ? 'underline' : 'none',
                padding: '4px 8px',
                transition: 'all 0.2s ease',
              }}
            >
              {prof.name}
            </button>
          );
        })}
      </div>

      {/* 선택된 교수님 축사 및 사진 표시 영역 */}
      {selectedProf && (
        <div
          style={{
            marginTop: '20px',
            padding: '24px',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            backgroundColor: '#FAFAFA',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            animation: 'fadeIn 0.3s ease-in-out',
          }}
        >
          {selectedProf.photo && (
            <img
              src={selectedProf.photo}
              alt={`${selectedProf.name} 교수님`}
              style={{
                width: '160px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            />
          )}
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1B3B2B', margin: 0 }}>
            {selectedProf.name} 교수님
          </h3>
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.6',
              color: '#333',
              whiteSpace: 'pre-line',
              maxWidth: '500px',
              margin: 0,
            }}
          >
            {selectedProf.message}
          </p>
        </div>
      )}
    </div>
  );
}
