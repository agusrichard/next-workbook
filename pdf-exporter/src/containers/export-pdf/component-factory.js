import data from './data'
import table from './table'
import styles from './ExportPDF.module.css'

function TopComponent() {
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
}

function TopRightLogo() {
  return (
    <div className={styles.logoContainer}>
      <img src='/beyond.png' className={styles.logoImg} />
      <p>{data.dateAndMore}</p>
      <p>{data.vesselName}</p>
    </div>
  )
}

function MiddleComponent() {
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
}

function SigningBlock() {
  return (
    <div className={styles.ccuSigningBlock}>
      <p>I accept the CCU handover as of date: {data.ccuHandoverData.date}</p>
      <div className={styles.columntwo}>
        <div>
          <div className={styles.ccuSigningGrid}>
            <p>Client Representative's Name:</p>
            <p>{data.ccuHandoverData.clientRepresentativeName}</p>
          </div>
          <div className={styles.ccuSigningGrid}>
            <p>Signature</p>
            <p className={styles.underline}></p>
          </div>
          <div className={styles.ccuSigningGrid}>
            <p>Client Representative's Name:</p>
            <p>{data.ccuHandoverData.companyRepresentativeName}</p>
          </div>
          <div className={styles.ccuSigningGrid}>
            <p>Signature</p>
            <p className={styles.underline}></p>
          </div>
        </div>
        <div>
          <div className={styles.ccuSigningGrid}>
            <p>Client Representative's Title:</p>
            <p>{data.ccuHandoverData.clientRepsPositionTitle}</p>
          </div>
          <div className={styles.ccuSigningGrid}>
            <p>Signature</p>
            <p className={styles.underline}></p>
          </div>
          <div className={styles.ccuSigningGrid}>
            <p>Company Representative's Title:</p>
            <p>{data.ccuHandoverData.companyRepsPositionTitle}</p>
          </div>
          <div className={styles.ccuSigningGrid}>
            <p>Signature</p>
            <p className={styles.underline}></p>
          </div>
        </div>
      </div>
    </div>
  )
}

function BoxedSigningBlock() {
  return (
    <div className={styles.boxedSigningBlock}>
      <p>I accept the CCU handover as of date: {data.ccuHandoverReturnData.date}</p>
      <div className={styles.columntwo}>
        <div>
          <div className={styles.ccuSigningGrid}>
            <p>Client Representative's Name: </p>
            <p className={styles.underline}></p>
          </div>
          <div className={styles.ccuSigningGrid}>
            <p>COMPANY Management Representative:</p>
            <p className={styles.underline}></p>
          </div>
        </div>
        <div>
          <div className={styles.ccuSigningGrid}>
            <p>Date:</p>
            <p className={styles.underline}></p>
          </div>
          <div className={styles.ccuSigningGrid}>
            <p>Date:</p>
            <p className={styles.underline}></p>
          </div>
        </div>
      </div>
    </div>
  )
}

function InspectionChecklistTop() {
  return (
    <div className={styles.inspectionChecklistTop}>
      <div className={styles.inspectionChecklistTopText}>
        <p>CARGO CARRYING UNIT (CCU)</p>
        <p>INSPECTION CHECKLIT</p>
      </div>
      <div>
        <img src='/beyond.png' className={styles.logoImg} />
      </div>
    </div>
  )
}

function InspectionChecklistHeader() {
  return (
    <div className={styles.inspectionListHeaderContainer}>
      <div>
        <div className={styles.inspectionListHeaderColumns}>
          <p>ID No.</p>
          <p className={styles.inspectionListHeaderTextValue}>{data.cargoChecklistData.header.idNo}</p>
        </div>
        <div className={styles.inspectionListHeaderColumns}>
          <p>Type CCU</p>
          <p className={styles.inspectionListHeaderTextValue}>{data.cargoChecklistData.header.typeCCU}</p>
        </div>
        <div className={styles.inspectionListHeaderColumns}>
          <p>Date of Inspection</p>
          <p className={styles.inspectionListHeaderTextValue}>{data.cargoChecklistData.header.dateOfInspection}</p>
        </div>
        <div className={styles.inspectionListHeaderColumns}>
          <p>Location of Inspection</p>
          <p className={styles.inspectionListHeaderTextValue}>{data.cargoChecklistData.header.locationOfInspection}</p>
        </div>
        <div className={styles.inspectionListHeaderColumns}>
          <p>Inspected by</p>
          <p className={styles.inspectionListHeaderTextValue}>{data.cargoChecklistData.header.inspectedBy}</p>
        </div>
      </div>
      <div>
        <div className={styles.inspectionListHeaderColumns}>
          <p>Last of Inspection (by 3rd party)</p>
          <p className={styles.inspectionListHeaderTextValue}>{data.cargoChecklistData.header.lastOfInspection}</p>
        </div>
        <div className={styles.inspectionListHeaderColumns}>
          <p>Color Code</p>
          <p className={styles.inspectionListHeaderTextValue}>{data.cargoChecklistData.header.colorCode}</p>
        </div>
        <div className={styles.inspectionListHeaderColumns}>
          <p>Standard</p>
          <p className={styles.inspectionListHeaderTextValue}>{data.cargoChecklistData.header.standard}</p>
        </div>
        <div className={styles.inspectionListHeaderColumns}>
          <p>Date of Hire</p>
          <p className={styles.inspectionListHeaderTextValue}>{data.cargoChecklistData.header.dateOfHire}</p>
        </div>
        <div className={styles.inspectionListHeaderColumns}>
          <p>MSR No.</p>
          <p className={styles.inspectionListHeaderTextValue}>{data.cargoChecklistData.header.msrNo}</p>
        </div>
      </div>
    </div>
  )
}

function InspectionChecklistTable() {
  return (
    <table className={styles.inspectionChecklistTable}>
      <thead>
        <tr>
          <th>No</th>
          <th>
            <p>Question</p>
            <p>(Jika jawabannya YA, beri tanda &#10003;. Jika jawabannya TIDAK, beri tanda X dan NA untuk tidak teraplikasi)</p>
          </th>
          <th>Yes/No</th>
          <th>Remark</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td style={{ fontWeight: 'bold' }}>INSPECTION ACCESSIBILITY</td>
          <td></td>
          <td rowSpan="37"></td>
        </tr>
        {table.inspectionAccessibility.map((item, index) => (
          <tr key={`inspectionAccessibility-${index}`}>
            <td>{index+1}</td>
            <td>{item.question}</td>
            <td>{item.answer}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td style={{ fontWeight: 'bold' }}>IDENTITY VERIFICATION</td>
          <td></td>
        </tr>
        {table.indentityVerification.map((item, index) => (
          <tr key={`indentityVerification-${index+2}`}>
            <td>{index+2}</td>
            <td>{item.question}</td>
            <td>{item.answer}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td style={{ fontWeight: 'bold' }}>PAD EYES</td>
          <td></td>
        </tr>
        {table.padEyes.map((item, index) => (
          <tr key={`padEyes-${index+4}`}>
            <td>{index+4}</td>
            <td>{item.question}</td>
            <td>{item.answer}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td style={{ fontWeight: 'bold' }}>RANGKA CCU</td>
          <td></td>
        </tr>
        {table.rangkaCCU.map((item, index) => (
          <tr key={`rangkaCCU-${index+7}`}>
            <td>{index+7}</td>
            <td>{item.question}</td>
            <td>{item.answer}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td style={{ fontWeight: 'bold' }}>PINTU</td>
          <td></td>
        </tr>
        {table.pintu.map((item, index) => (
          <tr key={`pintu-${index+11}`}>
            <td>{index+11}</td>
            <td>{item.question}</td>
            <td>{item.answer}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td style={{ fontWeight: 'bold' }}>MARKING</td>
          <td></td>
        </tr>
        {table.marking.map((item, index) => (
          <tr key={`marking-${index+16}`}>
            <td>{index+16}</td>
            <td>{item.question}</td>
            <td>{item.answer}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td style={{ fontWeight: 'bold' }}>PAD EYES</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td style={{ fontWeight: 'bold' }}>ID No. Of Wire Rope Sling: UK06A/92298</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td style={{ fontWeight: 'bold' }}>ID No. Of Shacker: C03433.C03436</td>
          <td></td>
        </tr>
        {table.liftingSet.map((item, index) => (
          <tr key={`liftingSet-${index+15}`}>
            <td>{index+15}</td>
            <td>{item.question}</td>
            <td>{item.answer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default {
  TopComponent,
  TopRightLogo,
  SigningBlock,
  MiddleComponent,
  BoxedSigningBlock,
  InspectionChecklistTop,
  InspectionChecklistTable,
  InspectionChecklistHeader,
}