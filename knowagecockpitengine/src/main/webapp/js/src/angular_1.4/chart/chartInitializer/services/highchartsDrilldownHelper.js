/**
 * Knowage, Open Source Business Intelligence suite
 * Copyright (C) 2016 Engineering Ingegneria Informatica S.p.A.
 * 
 * Knowage is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Knowage is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


angular.module('chartInitializer')

.service('highchartsDrilldownHelper',function(){
	
	return {
		
		breadcrumb: [],
		
		drilldown: function(selectedName, selectedSerie){
			
			var drill = {
					selectedName: selectedName,
					selectedSerie: selectedSerie
			};
			
			console.info("IN: HighchartsDrilldownHelper (handling the clicking on the value label of the charts item)");
			
			/**
			 * The workaround solution for drilling down when clicking on the value of the chart
			 * (i.e. on the label that is linked to single bar in the BAR chart or on the label
			 * that is linked to single point inside the LINE chart), when having multiple layers.
			 * 
			 * @author Danilo Ristovski (danristo, danilo.ristovski@mht.net)
			 */
			var i = this.breadcrumb.length;
			var indicator = null;
		   
			while (i--) 
		    {
		       if (JSON.stringify(this.breadcrumb[i]) === JSON.stringify(drill)) 
		       {
		    	   
		    	   indicator = true;
		       }
		    }
				
		    if (indicator != true)
		    	indicator = false;
			
		    if (!indicator)
			this.breadcrumb.push(drill);
		},
		
		drillup: function(){
			this.breadcrumb.pop();
		}
	}
	
})