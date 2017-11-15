
package companystock;

import java.math.BigInteger;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for companyStock complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="companyStock">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="companyName" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="stockID" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="availableShares" type="{http://www.w3.org/2001/XMLSchema}integer"/>
 *         &lt;element name="price" type="{CompanyStock}sharePrice"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "companyStock", propOrder = {
    "companyName",
    "stockID",
    "availableShares",
    "price"
})
public class CompanyStock {

    @XmlElement(required = true)
    protected String companyName;
    @XmlElement(required = true)
    protected String stockID;
    @XmlElement(required = true)
    protected BigInteger availableShares;
    @XmlElement(required = true)
    protected SharePrice price;

    /**
     * Gets the value of the companyName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCompanyName() {
        return companyName;
    }

    /**
     * Sets the value of the companyName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCompanyName(String value) {
        this.companyName = value;
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

    /**
     * Gets the value of the availableShares property.
     * 
     * @return
     *     possible object is
     *     {@link BigInteger }
     *     
     */
    public BigInteger getAvailableShares() {
        return availableShares;
    }

    /**
     * Sets the value of the availableShares property.
     * 
     * @param value
     *     allowed object is
     *     {@link BigInteger }
     *     
     */
    public void setAvailableShares(BigInteger value) {
        this.availableShares = value;
    }

    /**
     * Gets the value of the price property.
     * 
     * @return
     *     possible object is
     *     {@link SharePrice }
     *     
     */
    public SharePrice getPrice() {
        return price;
    }

    /**
     * Sets the value of the price property.
     * 
     * @param value
     *     allowed object is
     *     {@link SharePrice }
     *     
     */
    public void setPrice(SharePrice value) {
        this.price = value;
    }

}
