
package org.stockbroker.ntu;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import companystock.CompanyStockHistory;


/**
 * <p>Java class for fetchCompanyStockHistoryResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="fetchCompanyStockHistoryResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="return" type="{CompanyStock}CompanyStockHistory" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "fetchCompanyStockHistoryResponse", propOrder = {
    "_return"
})
public class FetchCompanyStockHistoryResponse {

    @XmlElement(name = "return")
    protected CompanyStockHistory _return;

    /**
     * Gets the value of the return property.
     * 
     * @return
     *     possible object is
     *     {@link CompanyStockHistory }
     *     
     */
    public CompanyStockHistory getReturn() {
        return _return;
    }

    /**
     * Sets the value of the return property.
     * 
     * @param value
     *     allowed object is
     *     {@link CompanyStockHistory }
     *     
     */
    public void setReturn(CompanyStockHistory value) {
        this._return = value;
    }

}
