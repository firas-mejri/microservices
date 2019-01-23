package com.microservices.wscnam;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WscnamService {
	
	@Autowired
	private DemandeRepository demandeRepository;

	public List<Demande> getAllDemandes(){
		List<Demande> demandes = new ArrayList<>();
		demandeRepository.findAll().forEach(demandes::add);
		return demandes;
	}

	public List<Demande> getAllDemandesById(String id) {
		
		List<Demande> demandes = new ArrayList<>();
		Iterable<Demande> tmp = demandeRepository.findAll();
		
		for(Demande d: tmp) {
			
			if( d.getNumAffiliation().equals(id) ) {
				
				demandes.add(d);
			}
		}
		
		return demandes;
		
	}

	public void addDemande(Demande demande) {
		
		demandeRepository.save(demande);
		
	}

	public void updateDemande(Demande demande, String id) {
		
		demandeRepository.save(demande);
		
	}

	public void deleteDemande(String id) {
		
		demandeRepository.deleteById(id);
		
	}
	
	

}
