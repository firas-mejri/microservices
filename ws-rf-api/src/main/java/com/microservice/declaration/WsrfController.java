package com.microservice.declaration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WsrfController {
	
	@Autowired
	private WsrfService wsrfService;
	
	@RequestMapping("/declarations")
	public List<Declaration> getAllDeclarations(){
		
		return wsrfService.getAllDeclarations();
		
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/declarations")
	public String addDeclaration(@RequestBody Declaration declaration) {
		
		return wsrfService.addDeclaration(declaration);
		
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/declarations/{id}")
	public void updateDeclaration(@RequestBody Declaration declaration, @PathVariable int id) {
		
		wsrfService.updateDeclaration(declaration, new Integer(id));
		
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/declarations/{id}")
	public void deleteDeclaration(@PathVariable int id) {
		wsrfService.deleteDeclaration(new Integer(id));
	}

}
