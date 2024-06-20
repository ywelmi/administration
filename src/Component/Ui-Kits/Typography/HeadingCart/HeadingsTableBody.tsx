import { H1, H2, H3, H4, H5, H6 } from '../../../../AbstractElements'
import { Heading } from '../../../../utils/Constant'

const HeadingsTableBody = () => {
  return (
    <tbody>
      <tr>
        <td><code>&lt;h1&gt;&lt;/h1&gt;</code></td>
        <td><H1 className="mb-0">1.875rem</H1></td>
        <td><H1><span> {Heading} 1 (MEGA)</span></H1></td>
      </tr>
      <tr>
        <td><code>&lt;h2&gt;&lt;/h2&gt;</code></td>
        <td><H2 className="mb-0">1.625rem</H2></td>
        <td><H2><span> {Heading} 2 (XL)</span></H2></td>
      </tr>
      <tr>
        <td><code>&lt;h3&gt;&lt;/h3&gt;</code></td>
        <td><H3 className="mb-0">1.375rem</H3></td>
        <td><H3><span> {Heading} 3 (LARGE)</span></H3></td>
      </tr>
      <tr>
        <td><code>&lt;h4&gt;&lt;/h4&gt;</code></td>
        <td><H4 className="mb-0">1.25rem</H4></td>
        <td><H4><span> {Heading} 4 (MEDIUM)</span></H4></td>
      </tr>
      <tr>
        <td><code>&lt;h5&gt;&lt;/h5&gt;</code></td>
        <td><H5 className="mb-0">1rem</H5></td>
        <td><H5><span> {Heading} 5 (SMALL)</span></H5></td>
      </tr>
      <tr>
        <td className="pb-0"><code>&lt;h6&gt;&lt;/h6&gt;</code></td>
        <td className="pb-0"><H6 className="mb-0">0.875rem</H6></td>
        <td className="pb-0"><H5><span> {Heading} 6 </span></H5></td>
      </tr>
    </tbody>
  )
}

export default HeadingsTableBody