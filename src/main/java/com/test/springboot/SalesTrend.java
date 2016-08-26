
package com.test.springboot;
import java.util.*;

import com.test.springboot.Sales;
public class SalesTrend
{
   
   private Set<Sales> salesTrend;
   public SalesTrend()
   {

     salesTrend = new HashSet<Sales>();
   }
   public void addSales(Sales sales)
   {
      this.salesTrend.add(sales);
   }
   public void setSalesTrend(Set<Sales> salesTrend)
   {
       this.salesTrend = salesTrend;
   }
   public Set<Sales> getSalesTrend()
   {
       return salesTrend;
   }
}