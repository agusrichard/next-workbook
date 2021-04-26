import data from './data'
import styles from './ExportPDF.module.css'

export default {
  TopComponent: function() {
    return (
      <div className={styles.orderedList}>
        <div className={styles.leftOrderedList}>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>1.</span>
            <span className={styles.leftColTitle}>MSR No.</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>2.</span>
            <span className={styles.leftColTitle}>Client Name</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>3.</span>
            <span className={styles.leftColTitle}>CCU Code</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>4.</span>
            <span className={styles.leftColTitle}>CCU Description</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>5.</span>
            <span className={styles.leftColTitle}>Contract Number</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>6.</span>
            <span className={styles.leftColTitle}>Contract Title</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>7.</span>
            <span className={styles.leftColTitle}>Size (L x W x H)</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>8.</span>
            <span className={styles.leftColTitle}>Tare & Payload (Kg)</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>9.</span>
            <span className={styles.leftColTitle}>MGW (Kg)</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>10.</span>
            <span className={styles.leftColTitle}>Remarks</span>
          </div>
        </div>
        <div className={styles.rightOrderedList}>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>:</span>
            <span className={styles.leftColTitle}>{data.msrNo}</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>:</span>
            <span className={styles.leftColTitle}>{data.clientName}</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>:</span>
            <span className={styles.leftColTitle}>{data.ccuCode}</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>:</span>
            <span className={styles.leftColTitle}>{data.ccuDescription}</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>:</span>
            <span className={styles.leftColTitle}>{data.contractNumber}</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>:</span>
            <span className={styles.leftColTitle}>{data.contractTitle}</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>:</span>
            <span className={styles.leftColTitle}>{data.sizeLWH}</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>:</span>
            <span className={styles.leftColTitle}>{data.tareNPayload}</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>:</span>
            <span className={styles.leftColTitle}>{data.mgw}</span>
          </div>
          <div className={styles.leftColItem}>
            <span className={styles.leftColNum}>:</span>
            <span className={styles.leftColTitle}>{data.remarks}</span>
          </div>
        </div>
      </div>
    )
  },
  TopRightLogo: function() {
    return (
      <div className={styles.logoContainer}>
        <img src='/beyond.png' className={styles.logoImg} />
        <p>{data.dateAndMore}</p>
        <p>{data.vesselName}</p>
      </div>
    )
  },
  MiddleComponent: function() {
    return (
      <div className={styles.middleComponentContainer}>
        <div className={styles.middleComponentColumn}>
          <p className={styles.boldTerms}>By ACCEPTING and SIGNING this form, I here with AGREE TO the following:</p>
          <ul className={styles.terms}>
            <li>This equipment remains property of Company at all times.</li>
            <li>Hirer shall report immediately any faults or damage to COMPANY Operations Manager.</li>
            <li>Hirer shall return this equipment upon completion to COMPANY.</li>
            <li>Hirer account shall be charged as replacement cost should there be damage or failure in returning the equipment due to negligence by the Hirer.</li>
          </ul>
        </div>
        <div className={styles.middleComponentColumn}>
          <p className={styles.boldTerms}>Dengan MENERIMA dan MENANDATANGANI form ini, Saya SETUJU terhadap hal-hal berikut:</p>
          <ul className={styles.terms}>
            <li>Peralatan ini sepenuhnya merupakan milik Company.</li>
            <li>Penyewa harus segera melapor ke Manajer Operasional COMPANY atas segala kerusakan yang terjadi.</li>
            <li>Penyewa harus mengembalikan peralatan ini ke COMPANY setelah sewa selesai.</li>
            <li>Penyewa bersedia dikenakan biaya penggantian jika terjadi kerusakan atau tidak bisa mengembalikan peralatan dikarenakan kelalaian oleh Penyewa.</li>
          </ul>
        </div>
      </div>
    )
  },
  SigningBlock: function() {
    return (
      <div>
        <p>I accept the CCU handover as of date: {data.ccuHandoverData.date}</p>
        <div className={styles.ccuSigningGrid}>
          <div>
            <div>
              <p>Client Representative's Name:</p>
              <p>Signature</p>
            </div>
            <div>
              <p>Client Representative's Name:</p>
              <p>Signature</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}