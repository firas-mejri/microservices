package com.microservices.wscnam;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WscnamController {

	@Autowired
	private WscnamService wscnamService;
	
	@RequestMapping("/demandes")
	public List<Demande> getAllDemandes(){
		
		return wscnamService.getAllDemandes();
		
	}
	
	
	@RequestMapping("/demandes/{id}")
	public List<Demande> getAllDemandesById(@PathVariable String id){
		
		return wscnamService.getAllDemandesById(id);
		
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/demandes")
	public void addDemande(@RequestBody Demande demande) {
		wscnamService.addDemande(demande);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/demandes/{id}")
	public void updateDemande(@RequestBody Demande demande,@PathVariable String id) {
		
		wscnamService.updateDemande(demande, id);
		
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/demandes/{id}")
	public void deleteDemande(@PathVariable String id) {
		
		wscnamService.deleteDemande(id);
		
	}
	
}
