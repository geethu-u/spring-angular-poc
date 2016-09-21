

package com.test.springboot;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.test.springboot.Sales;
import com.test.springboot.SalesTrend;
import java.util.*;
import com.google.gson.JsonArray;
//import net.sf.json.JSONException;

import org.codehaus.jackson.map.ObjectMapper;
import java.io.IOException;
import com.google.gson.Gson;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.json.JSONObject;
import org.json.JSONException;



@RestController
public class RestAPIController {


    @RequestMapping("/dashboard")
    public String index() {
        return "Home Page is here";
    }

    @RequestMapping("/sales")
   public String getSales()
   {
       Sales sales = new Sales();
       sales.setMonth("JAN16");
       sales.setAmount(1000.12);
       String jsonToString = "Exception in conversion";
       try{

       ObjectMapper mapper = new ObjectMapper();
       jsonToString = mapper.writeValueAsString(sales);
       }
       catch(Exception ex)
       {

       }
       return(jsonToString);        
   }
    @RequestMapping("/salestrend")
   public String getSalesTrend()
   {
       String[] months = {"JAN16", "FEB16", "MAR16","APR16","MAY16","JUN16","JUL16","AUG16","SEP16","OCT16","NOV16","DEC16"};
       Sales sales1 = new Sales();
       sales1.setMonth("JAN16");
       sales1.setAmount(1000.12);

       Sales sales2 = new Sales();
       sales2.setMonth(months[1]);
       sales2.setAmount(2002.12);

       Sales sales3 = new Sales();
       sales3.setMonth("MAR16");
       sales3.setAmount(3000.12);

       SalesTrend salesTrend = new SalesTrend();
       salesTrend.addSales(sales1);       
       salesTrend.addSales(sales2); 
       
       List<Sales> salesTrendList = new ArrayList<Sales>();
       for(int index=0; index <12; index++)
       {
           Sales sales = new Sales();
           sales.setMonth(months[index]);
           double amount = 0;
           switch(index){
            case 1 : amount = 100 + index*100 + index*0.01;
            break;
            case 2 : amount = 500 + index*100 + index*0.01;
            break;            
            case 3 : amount = 200 + index*300 + index*0.01;
            break;            
            case 4 : amount = 100 + index*400 + index*0.01;
            break;            
            case 5 : amount = 100 + index*200 + index*0.01;
            break; 
            case 6 : amount = 100 + index*200 + index*0.01;
            break; 
            case 7 : amount = 100 + index*100 + index*0.01;
            break; 
            case 12 : amount = 100 + index*200 + index*0.01;
            break; 
            default : amount = 100 + index*200 + index*0.01;
            break;                             
           }
           sales.setAmount(amount);
           salesTrendList.add(sales);
       }      
       // salesTrendList.add(sales1);
       // salesTrendList.add(sales3);
       // salesTrendList.add(sales2);

       String jsonToString = "Exception in conversion";
       try{

       ObjectMapper mapper = new ObjectMapper();
       jsonToString = mapper.writeValueAsString(salesTrendList);
       }
       catch(Exception ex)
       {

       }
       return(jsonToString);        
   }


@RequestMapping(
                method = RequestMethod.GET,
                produces = MediaType.APPLICATION_JSON_VALUE,
                value = "/logsearch")
     public Object logsearch(@RequestParam(value="query", defaultValue="*:*") String queryString) 
         {    
         Gson gson = new Gson();

          String output = "Error in getting data from solr";
          StringBuilder sb = new StringBuilder();
          String modifiedQueryString = queryString.replace(",","%20AND%20");
         
          String finalQueryString = modifiedQueryString.replace(" ","%20");

    try {

               String solrSearchUrl = "http://localhost:8983/solr/clelogs2/query?q="+finalQueryString+"&wt=json&indent=true&rows=500";
    URL url = new URL(solrSearchUrl);
                //URL url = new URL("http://localhost:8983/solr/clelogs2/query?q=*:*&wt=json&indent=true");
    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    conn.setRequestMethod("GET");
    conn.setRequestProperty("Accept", "application/json");

    if (conn.getResponseCode() != 200) {
      throw new RuntimeException("Failed : HTTP error code : "
          + conn.getResponseCode());
    }

    BufferedReader br = new BufferedReader(new InputStreamReader(
      (conn.getInputStream())));

    
    System.out.println("Output from Server .... \n");
    while ((output = br.readLine()) != null) {
      sb.append(output + '\n');
    }
                br.close();

    conn.disconnect();
                System.out.println("solrSearchUrl = " + solrSearchUrl);

    } catch (MalformedURLException e) {

    e.printStackTrace();

    } catch (IOException e) {

    e.printStackTrace();

    }

     
        JSONObject jsonObject = new JSONObject(sb.toString());
        System.out.println("queryString = " + finalQueryString );
       

        return(sb.toString());
    }

}