
package com.test.springboot;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.test.springboot.Sales;
import com.test.springboot.SalesTrend;
import java.util.*;

import org.codehaus.jackson.map.ObjectMapper;
import java.io.IOException;

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
           sales.setAmount(100 + index*100 + index*0.01);
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

}