import { useRef } from 'react'
import ReactDOM from 'react-dom'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf'

import CONSTANTS from './constants'
import styles from './ExportPDF.module.css'
import ComponentFactory from './component-factory'

export default function ExportDefault() {
	const refPDFExport = useRef(null)
	const refDiv = useRef(null)

	const exportPDFWithMethod = () => {
		savePDF(ReactDOM.findDOMNode(refDiv.current), {
			margin: CONSTANTS.margin,
			fileName: CONSTANTS.fileName,
			paperSize: CONSTANTS.paperSize,
		})
	}

	const exportPDFWithComponent = () => {
		refPDFExport.current.save()
	}

  return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<div className={styles.btnsContainer}>
					<button
						className={styles.btn}
						onClick={exportPDFWithComponent}
					>Export with Component</button>
					<button
						className={styles.btn}
						ref={refDiv}
						onClick={exportPDFWithMethod}
					>Export with Method</button>
				</div>
				<div className={styles.content}>
					<PDFExport
						margin={CONSTANTS.margin}
						author={CONSTANTS.author}
            forcePageBreak='.page-break'
						fileName={CONSTANTS.fileName}
						paperSize={CONSTANTS.paperSize}
						ref={component => refPDFExport.current = component}
					>
						<div
							className={styles.pdfContainer}
							ref={container => refDiv.current = container}
						>
							<p className={styles.documentTitle}>CCU ON HIRE/OFF HIRE FORM</p>
							<ComponentFactory.TopComponent />
							<ComponentFactory.TopRightLogo />
							<ComponentFactory.MiddleComponent />
							<ComponentFactory.SigningBlock />
              <ComponentFactory.BoxedSigningBlock />
              <h3 className="page-break">Page 2</h3>
              <div>Sekardayu Hana Pradiani</div>
						</div>
					</PDFExport>
				</div>
			</div>
		</div>
	)
}