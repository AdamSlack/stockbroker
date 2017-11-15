
package companystock;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CompanyStockHistory complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="CompanyStockHistory">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="datapoints" type="{CompanyStock}timeSeries" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="granularity" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="stockID" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CompanyStockHistory", propOrder = {
    "datapoints",
    "granularity",
    "stockID"
})
public class CompanyStockHistory {

    @XmlElement(nillable = true)
    protected List<TimeSeries> datapoints;
    @XmlElement(required = true)
    protected String granularity;
    @XmlElement(required = true)
    protected String stockID;

    /**
     * Gets the value of the datapoints property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the datapoints property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getDatapoints().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link TimeSeries }
     * 
     * 
     */
    public List<TimeSeries> getDatapoints() {
        if (datapoints == null) {
            datapoints = new ArrayList<TimeSeries>();
        }
        return this.datapoints;
    }

    /**
     * Gets the value of the granularity property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getGranularity() {
        return granularity;
    }

    /**
     * Sets the value of the granularity property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setGranularity(String value) {
        this.granularity = value;
    }

    /**
     * Gets the value of the stockID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStockID() {
        return stockID;
    }

    /**
     * Sets the value of the stockID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStockID(String value) {
        this.stockID = value;
    }

}
