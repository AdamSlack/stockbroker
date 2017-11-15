
package org.stockbroker.ntu;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the org.stockbroker.ntu package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _AddNewCompanyStockDetailsResponse_QNAME = new QName("http://ntu.stockbroker.org/", "addNewCompanyStockDetailsResponse");
    private final static QName _FetchCompanyStockDetails_QNAME = new QName("http://ntu.stockbroker.org/", "fetchCompanyStockDetails");
    private final static QName _FetchCompanyStockHistory_QNAME = new QName("http://ntu.stockbroker.org/", "fetchCompanyStockHistory");
    private final static QName _AddNewCompanyStockDetails_QNAME = new QName("http://ntu.stockbroker.org/", "addNewCompanyStockDetails");
    private final static QName _FetchCompanyStockHistoryResponse_QNAME = new QName("http://ntu.stockbroker.org/", "fetchCompanyStockHistoryResponse");
    private final static QName _HTTPGetResponse_QNAME = new QName("http://ntu.stockbroker.org/", "HTTPGetResponse");
    private final static QName _HTTPGet_QNAME = new QName("http://ntu.stockbroker.org/", "HTTPGet");
    private final static QName _FetchCompanyStockDetailsResponse_QNAME = new QName("http://ntu.stockbroker.org/", "fetchCompanyStockDetailsResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: org.stockbroker.ntu
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link HTTPGet }
     * 
     */
    public HTTPGet createHTTPGet() {
        return new HTTPGet();
    }

    /**
     * Create an instance of {@link FetchCompanyStockDetailsResponse }
     * 
     */
    public FetchCompanyStockDetailsResponse createFetchCompanyStockDetailsResponse() {
        return new FetchCompanyStockDetailsResponse();
    }

    /**
     * Create an instance of {@link AddNewCompanyStockDetails }
     * 
     */
    public AddNewCompanyStockDetails createAddNewCompanyStockDetails() {
        return new AddNewCompanyStockDetails();
    }

    /**
     * Create an instance of {@link FetchCompanyStockHistoryResponse }
     * 
     */
    public FetchCompanyStockHistoryResponse createFetchCompanyStockHistoryResponse() {
        return new FetchCompanyStockHistoryResponse();
    }

    /**
     * Create an instance of {@link HTTPGetResponse }
     * 
     */
    public HTTPGetResponse createHTTPGetResponse() {
        return new HTTPGetResponse();
    }

    /**
     * Create an instance of {@link FetchCompanyStockHistory }
     * 
     */
    public FetchCompanyStockHistory createFetchCompanyStockHistory() {
        return new FetchCompanyStockHistory();
    }

    /**
     * Create an instance of {@link AddNewCompanyStockDetailsResponse }
     * 
     */
    public AddNewCompanyStockDetailsResponse createAddNewCompanyStockDetailsResponse() {
        return new AddNewCompanyStockDetailsResponse();
    }

    /**
     * Create an instance of {@link FetchCompanyStockDetails }
     * 
     */
    public FetchCompanyStockDetails createFetchCompanyStockDetails() {
        return new FetchCompanyStockDetails();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddNewCompanyStockDetailsResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ntu.stockbroker.org/", name = "addNewCompanyStockDetailsResponse")
    public JAXBElement<AddNewCompanyStockDetailsResponse> createAddNewCompanyStockDetailsResponse(AddNewCompanyStockDetailsResponse value) {
        return new JAXBElement<AddNewCompanyStockDetailsResponse>(_AddNewCompanyStockDetailsResponse_QNAME, AddNewCompanyStockDetailsResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link FetchCompanyStockDetails }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ntu.stockbroker.org/", name = "fetchCompanyStockDetails")
    public JAXBElement<FetchCompanyStockDetails> createFetchCompanyStockDetails(FetchCompanyStockDetails value) {
        return new JAXBElement<FetchCompanyStockDetails>(_FetchCompanyStockDetails_QNAME, FetchCompanyStockDetails.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link FetchCompanyStockHistory }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ntu.stockbroker.org/", name = "fetchCompanyStockHistory")
    public JAXBElement<FetchCompanyStockHistory> createFetchCompanyStockHistory(FetchCompanyStockHistory value) {
        return new JAXBElement<FetchCompanyStockHistory>(_FetchCompanyStockHistory_QNAME, FetchCompanyStockHistory.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddNewCompanyStockDetails }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ntu.stockbroker.org/", name = "addNewCompanyStockDetails")
    public JAXBElement<AddNewCompanyStockDetails> createAddNewCompanyStockDetails(AddNewCompanyStockDetails value) {
        return new JAXBElement<AddNewCompanyStockDetails>(_AddNewCompanyStockDetails_QNAME, AddNewCompanyStockDetails.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link FetchCompanyStockHistoryResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ntu.stockbroker.org/", name = "fetchCompanyStockHistoryResponse")
    public JAXBElement<FetchCompanyStockHistoryResponse> createFetchCompanyStockHistoryResponse(FetchCompanyStockHistoryResponse value) {
        return new JAXBElement<FetchCompanyStockHistoryResponse>(_FetchCompanyStockHistoryResponse_QNAME, FetchCompanyStockHistoryResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link HTTPGetResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ntu.stockbroker.org/", name = "HTTPGetResponse")
    public JAXBElement<HTTPGetResponse> createHTTPGetResponse(HTTPGetResponse value) {
        return new JAXBElement<HTTPGetResponse>(_HTTPGetResponse_QNAME, HTTPGetResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link HTTPGet }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ntu.stockbroker.org/", name = "HTTPGet")
    public JAXBElement<HTTPGet> createHTTPGet(HTTPGet value) {
        return new JAXBElement<HTTPGet>(_HTTPGet_QNAME, HTTPGet.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link FetchCompanyStockDetailsResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ntu.stockbroker.org/", name = "fetchCompanyStockDetailsResponse")
    public JAXBElement<FetchCompanyStockDetailsResponse> createFetchCompanyStockDetailsResponse(FetchCompanyStockDetailsResponse value) {
        return new JAXBElement<FetchCompanyStockDetailsResponse>(_FetchCompanyStockDetailsResponse_QNAME, FetchCompanyStockDetailsResponse.class, null, value);
    }

}
