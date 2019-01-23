package com.microservice.declaration;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WsrfService {

	@Autowired
	private DeclarationRepository declarationRepository;
	
	public List<Declaration> getAllDeclarations() {
		
		List<Declaration> declarations = new ArrayList<>();
		declarationRepository.findAll().forEach(declarations::add);
		return declarations;
	}

	public String addDeclaration(Declaration declaration) {
		
		if( declarationRepository.save(declaration) != null ) {
			return "succeded";
		} else {
			return "failed";
		}
		
	}

	public void updateDeclaration(Declaration declaration, Integer id) {
		
		declarationRepository.save(declaration);
		
	}

	public void deleteDeclaration(Integer id) {
		
		declarationRepository.deleteById(id);
		
	}

}
